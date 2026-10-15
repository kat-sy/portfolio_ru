import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir,stat} from 'node:fs/promises';
import {resolve,dirname,extname} from 'node:path';
import {cases} from '../src/cases.mjs';
import {copy} from '../src/site.mjs';

const root=resolve('dist');
async function allFiles(dir){const entries=await readdir(dir,{withFileTypes:true});return (await Promise.all(entries.map(e=>e.isDirectory()?allFiles(resolve(dir,e.name)):[resolve(dir,e.name)]))).flat();}
const files=await allFiles(root),htmlFiles=files.filter(f=>f.endsWith('.html'));
const pages=new Map(await Promise.all(htmlFiles.map(async f=>[f,await readFile(f,'utf8')])));
function attrs(tag){return Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m=>[m[1],m[2]]));}
const ids=html=>[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);

test('all eight substantive locale routes contain one main heading and accessible navigation',()=>{
  assert.equal(htmlFiles.length,10);
  for(const [file,html] of pages){
    assert.equal((html.match(/<h1[ >]/g)||[]).length,1,file);
    assert.equal((html.match(/<main[ >]/g)||[]).length,1,file);
    assert.ok(html.includes('href="#main"'),file);
    assert.equal(new Set(ids(html)).size,ids(html).length,'Duplicate ID: '+file);
    assert.ok(!/undefined|null|__EHOPE_|__ECOPART_|lorem ipsum/i.test(html),'Placeholder: '+file);
    for(const img of html.matchAll(/<img\b[^>]*>/g))assert.ok('alt' in attrs(img[0]),'Missing image alt');
  }
});
test('all internal links, anchor destinations, scripts, styles and image assets resolve',async()=>{
  for(const [file,html] of pages){
    for(const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
      const ref=match[1];if(/^(https?:|mailto:|data:)/.test(ref)||!ref)continue;
      const [path,hash]=ref.split('#');
      let target=path?(path.startsWith('/')?resolve(root,'.'+path):resolve(dirname(file),path)):file;
      if(path?.endsWith('/'))target=resolve(target,'index.html');
      assert.ok(files.includes(target),`Missing ${ref} in ${file}`);
      assert.ok((await stat(target)).size>0,'Empty asset '+target);
      if(hash&&pages.has(target))assert.ok(ids(pages.get(target)).includes(hash),`Missing #${hash} in ${target}`);
    }
  }
});
test('language controls preserve the matching page and both locales have complete content',()=>{
  assert.deepEqual(Object.keys(copy.ru).sort(),Object.keys(copy.en).sort());
  for(const [file,html] of pages){
    if(!/\/(ru|en)\//.test(file))continue;
    const route=file.split(/\/(?:ru|en)\//)[1].replace(/index.html$/,'');
    for(const lang of ['ru','en'])assert.ok(html.includes(`href="/${lang}/${route}" lang="${lang}"`),file);
  }
  for(const project of Object.values(cases))assert.deepEqual(project.ru.sections.map(s=>s.id),project.en.sections.map(s=>s.id));
});
test('audience panels and image exploration have complete no-JavaScript fallbacks',()=>{
  for(const lang of ['ru','en']){
    const html=pages.get(resolve(root,lang,'work/ehope/index.html'));
    assert.match(html,/data-audience-controls hidden/);
    assert.match(html,/id="audience-guest" data-audience-panel="guest">/);
    assert.match(html,/id="audience-member" data-audience-panel="member">/);
    assert.match(html,/href="\/media\/ehope-guest.webp" data-inspect/);
    assert.match(html,/href="\/media\/ehope-member.webp" data-inspect/);
  }
});
test('no temporary Figma assets or remote font requests ship; local CSS assets exist',async()=>{
  const css=(await Promise.all(files.filter(f=>extname(f)==='.css').map(f=>readFile(f,'utf8')))).join('\n');
  assert.ok(!/figma\.com\/api\/mcp\/asset|fonts\.(googleapis|gstatic)\.com/.test(css));
  for(const m of css.matchAll(/url\(['"]?(\/[^)'"\s]+)['"]?\)/g))assert.ok(files.includes(resolve(root,'.'+m[1])),m[1]);
  assert.ok(css.includes('prefers-reduced-motion:reduce'));
});
test('contact choices draft distinct emails and leave actual sending to the visitor',()=>{
  const html=pages.get(resolve(root,'en/index.html'));
  const mails=[...html.matchAll(/href="(mailto:[^"]+)"/g)].map(m=>m[1]);
  assert.equal(mails.length,3);assert.notEqual(mails[0],mails[1]);
  assert.ok(mails[0].includes('subject=Product%20designer%20opportunity'));
  assert.ok(mails[1].includes('subject=Let'));
});
