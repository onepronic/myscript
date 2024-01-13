function convertToSlug(string) {
    let slug = string.toLowerCase();
    slug = slug.replace(/[^a-z0-9 -]/g, ''); // Remove invalid chars
    slug = slug.replace(/\s+/g, '-'); // Replace space with -
    slug = slug.replace(/-+/g, '-'); // Replace multiple - with single -
    return slug.replace(/^-+|-+$/g, ''); // Trim - from start and end
}
        
function autoRelated(data) {
    var out = data[1];        
    for (i = 0; i < out.length; i++) {
        var kw = out[i];
        var slugse = convertToSlug(kw);
        dom += `<aside><a href="${baseUrl}/info/${slugse}" target="_blank"><img alt="${kw}" src="https://tse1.mm.bing.net/th?q=${slugse}" width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" /></a><small>title: <i>${kw}</i></small><h3 style='text-transform:capitalize;font-weight:bold;' align='center'><a href="${baseUrl}/info/${slugse}">${kw}</a></h3><p align="justify"><b>${kw}</b> is one of best result for ${postTitle}. Feel free to save and bookmark ${kw}</p><center><a href="https://gadsatz.com/he94jri1?key=e35de26d400f7a5815cb1bcaa12e452d" class="button preview"  target="_blank">Preview</a><a href="https://tse1.mm.bing.net/th?q=${slugse}" class="button download"  target="_blank">Download</a></center></aside>`;
      }
}
