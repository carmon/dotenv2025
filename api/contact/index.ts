type Link = {
  href: string;
  svg: string;
}

const links: Link[] = [
  {
    href: `mailto:${process.env.MAIL_TO}`,
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path d="M0 4v13h9v-1H1.662l5.635-4.246.002-.002-.83-.625-.002.002L1 15.246V5.934L9.049 12h1.902L19 5.934V14h1V4zm1.662 1h16.676l-7.961 6h-.754zM14.5 13 11 16.5l3.5 3.5H16l-3-3h7v-1h-7l3-3z" style="fill-opacity:1;stroke:none;stroke-width:0"/></svg>',
  }, 
  {
    href: `https://www.linkedin.com/in/${process.env.LINKEDIN_PROFILE}/`,
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="mercado-match" data-supported-dps="24x24"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2M8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75M19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.7.7 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>',
  }, 
  {
    href: `https://github.com/${process.env.GITHUB_PROFILE}/`,
    svg: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75"/></svg>',
  }, 
  {
    href: `https://x.com/${process.env.X_PROFILE}`,
    svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>',
  }
];

export async function POST() {
  let html = '<div style="margin-top: 8px; margin-bottom: 8px;">';
  const writeAnchor = ({ href, svg }: Link) => `<a href=${href} target="_blank" style="cursor: pointer; margin: 4px;">${svg}</a>`;
  for(let i=0; i<links.length; i++) {
    html += writeAnchor(links[i]);
  }
  html += '</div>';
  return new Response(html);
}