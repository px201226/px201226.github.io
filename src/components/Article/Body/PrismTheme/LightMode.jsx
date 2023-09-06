import { createGlobalStyle, css } from "styled-components"
import CommonStyle from "./CommonStyle"

const Theme = css`
  /* PrismJS 1.28.0
  https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+bash+c+csharp+cpp+go+java+markdown+python+scss+sql+toml+yaml&plugins=toolbar+copy-to-clipboard */

 & code[class*=language-], pre[class*=language-] {
    color: #000;
    background: 0 0;
    text-shadow: 0 1px #fff;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none
  }

  & code[class*=language-] ::-moz-selection, code[class*=language-]::-moz-selection, pre[class*=language-] ::-moz-selection, pre[class*=language-]::-moz-selection {
    text-shadow: none;
    background: #b3d4fc
  }

  & code[class*=language-] ::selection, code[class*=language-]::selection, pre[class*=language-] ::selection, pre[class*=language-]::selection {
    text-shadow: none;
    background: #b3d4fc
  }

  @media print {
    code[class*=language-], pre[class*=language-] {
      text-shadow: none
    }
  }

  pre[class*=language-] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto
  }

  :not(pre) > code[class*=language-], pre[class*=language-] {
    background: #f8f9fa
  }

  :not(pre) > code[class*=language-] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal
  }

  .token.cdata, .token.comment, .token.doctype, .token.prolog {
    color: #708090
  }

  .token.punctuation {
    color: #999;
    font-weight : bold;
  }

  .token.namespace {
    opacity: .7
  }

  .token.boolean, .token.constant, .token.deleted, .token.number, .token.property, .token.symbol, .token.tag {
    color: #905
  }

  .token.attr-name, .token.builtin, .token.char, .token.inserted, .token.selector, .token.string {
    color: #690
  }

  .language-css .token.string, .style .token.string, .token.entity, .token.operator, .token.url {
    color: #9a6e3a;
    background: hsla(0, 0%, 100%, .5)
  }

  .token.atrule, .token.attr-value, .token.keyword {
    color: #204a87;
    font-weight : bold;
  }

  .token.class-name{
    color: #000000;
    
  }

  .token.function{
    color: #8f5902;
  }

  .token.important, .token.regex, .token.variable {
    color: #e90
  }

  .token.bold, .token.important {
    font-weight: 700
  }

  .token.italic {
    font-style: italic
  }

  .token.entity {
    cursor: help
  }

  div.code-toolbar {
    position: relative
  }

  div.code-toolbar > .toolbar {
    position: absolute;
    z-index: 10;
    top: .3em;
    right: .2em;
    transition: opacity .3s ease-in-out;
    opacity: 0
  }

  div.code-toolbar:hover > .toolbar {
    opacity: 1
  }

  div.code-toolbar:focus-within > .toolbar {
    opacity: 1
  }

  div.code-toolbar > .toolbar > .toolbar-item {
    display: inline-block
  }

  div.code-toolbar > .toolbar > .toolbar-item > a {
    cursor: pointer
  }

  div.code-toolbar > .toolbar > .toolbar-item > button {
    background: 0 0;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none
  }

  div.code-toolbar > .toolbar > .toolbar-item > a, div.code-toolbar > .toolbar > .toolbar-item > button, div.code-toolbar > .toolbar > .toolbar-item > span {
    color: #bbb;
    font-size: .8em;
    padding: 0 .5em;
    background: #f5f2f0;
    background: rgba(224, 224, 224, .2);
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, .2);
    border-radius: .5em
  }

  div.code-toolbar > .toolbar > .toolbar-item > a:focus, div.code-toolbar > .toolbar > .toolbar-item > a:hover, div.code-toolbar > .toolbar > .toolbar-item > button:focus, div.code-toolbar > .toolbar > .toolbar-item > button:hover, div.code-toolbar > .toolbar > .toolbar-item > span:focus, div.code-toolbar > .toolbar > .toolbar-item > span:hover {
    color: inherit;
    text-decoration: none
  }
`

const DarkMode = createGlobalStyle`
  ${CommonStyle}
  ${Theme}
`

export default DarkMode
