// Problem

// You write a factory function that creates an object of a specific subtype
// based on a string identifier, and there are a lot of possible subtypes.

// Solution
// Store all subtypes in a type map, widen with index access, and use mapped
// types like Partial<T>.


type AllElements = {
    a: HTMLAnchorElement,
    div: HTMLDivElement,
    p: HTMLParagraphElement,
    span: HTMLSpanElement,
    img: HTMLImageElement,
    button: HTMLButtonElement,
    input: HTMLInputElement,
    textarea: HTMLTextAreaElement,
    form: HTMLFormElement,
    select: HTMLSelectElement,
    option: HTMLOptionElement,
    ul: HTMLUListElement,
    ol: HTMLOListElement,
    li: HTMLLIElement,
    table: HTMLTableElement,
    tr: HTMLTableRowElement,
    th: HTMLTableHeaderCellElement,
    td: HTMLTableCellElement,
    video: HTMLVideoElement,
    audio: HTMLAudioElement,
    canvas: HTMLCanvasElement,
    iframe: HTMLIFrameElement,
    script: HTMLScriptElement,
    link: HTMLLinkElement,
    meta: HTMLMetaElement,
    style: HTMLStyleElement,
    header: HTMLElement,
    footer: HTMLElement,
    nav: HTMLElement,
    section: HTMLElement,
    article: HTMLElement,
    aside: HTMLElement,
    h1: HTMLHeadingElement,
    h2: HTMLHeadingElement,
    h3: HTMLHeadingElement,
    h4: HTMLHeadingElement,
    h5: HTMLHeadingElement,
    h6: HTMLHeadingElement,
    main: HTMLElement,
    figure: HTMLElement,
    figcaption: HTMLElement,
    blockquote: HTMLElement,
    cite: HTMLElement,
    code: HTMLElement,
    pre: HTMLElement,
    progress: HTMLProgressElement,
    details: HTMLDetailsElement,
    summary: HTMLElement,
    datalist: HTMLDataListElement,
    fieldset: HTMLFieldSetElement,
    legend: HTMLLegendElement,
    label: HTMLLabelElement,
    meter: HTMLMeterElement,
    output: HTMLOutputElement,
    dialog: HTMLDialogElement,
    map: HTMLMapElement,
    area: HTMLAreaElement,
    embed: HTMLEmbedElement,
    object: HTMLObjectElement,
    param: HTMLParamElement,
    source: HTMLSourceElement,
    track: HTMLTrackElement,
    time: HTMLTimeElement,
    b: HTMLElement,
    i: HTMLElement,
    u: HTMLElement,
    strong: HTMLElement,
    em: HTMLElement,
    abbr: HTMLElement,
    address: HTMLElement,
    bdo: HTMLElement,
    br: HTMLBRElement,
    del: HTMLModElement,
    ins: HTMLModElement,
    kbd: HTMLElement,
    mark: HTMLElement,
    q: HTMLQuoteElement,
    s: HTMLElement,
    samp: HTMLElement,
    small: HTMLElement,
    sub: HTMLElement,
    sup: HTMLElement,
    wbr: HTMLElement
};


const createElement    = <T extends keyof AllElements> (tag :T  , props : Partial<AllElements[T]>)=> {
    const ele = document.createElement(tag)
    return Object.assign(ele , props)
}
const anchor = createElement('a', {href : 'https://www.google.com'})
const div  = createElement('div',{textContent : 'something is missing'})



