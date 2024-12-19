import { getProjectsList } from '../../src/projects';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const text = await request.text();
  const count = Number(text.slice(text.indexOf('=')+1))
  let html = '';

  const projects = await getProjectsList(count);
  projects.forEach(({ name, description, homepageUrl, languages, url }) => {
    html += '<tr>';
    html += `<td><a style="padding-right: 5px;" href="${url}" target="_blank">${name}</a></td>`;
    html += `<td style="padding: 5px;">${description}</td>`;
    html += `<td><ul style="list-style-type: none; padding-left: 16px; padding-right: 16px;" >${languages.map(l => `<li>${l}</li>`).join('')}</ul></td>`;
    html += `<td><a href="${homepageUrl}" target="_blank" style="padding-left: 8px; padding-right: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 19H5V5h7V3H3v18h18v-9h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"/></svg></a></td>`;
    html += '</tr>';
  });

  return new Response(html);
}