

type EntityBase = {
  indices: [number, number]
}

type UrlEntity = EntityBase & {
  displayUrl: string,
  url: string,
}

type MentionEntity = EntityBase & {
  screeName: string
}

type Entities = {
  urls: Array<UrlEntity>,
  mentions: Array<MentionEntity>
}

function createElement(data: UrlEntity | MentionEntity) {
  if ('displayUrl' in data) {
    return `<a href="${data.url}">${data.displayUrl}</a>`
  }
  return `<a href="https://x.com/${data.screeName}">@${data.screeName}</a>`
}

function renderTextWithEntities(text: string, entities: Entities): string {
  // put your code here
  const newOrder = [...entities.urls, ...entities.mentions].sort((a,b) => a.indices[0] - b.indices[0]).reverse();
  newOrder.forEach(item => {
    text = text.slice(0, item.indices[0]) + createElement(item) + text.slice(item.indices[1])
  })
  return text;
}

const text = 'Kudos to @JSer_ZANP for the tool!';
const entities = {
  urls: [],
  mentions: [{ screeName: "JSer_ZANP", indices: [9, 19] }],
};
console.log(renderTextWithEntities(text, entities as Entities))