"use strict"

const BrowserBlob = require("blob")
const NodeBlob = require("fetch-blob")
const { isBrowser, isNode } = require("browser-or-node")

module.exports = (() => {
    if (isBrowser) return BrowserBlob
    if (isNode) return NodeBlob
    return undefined
})()
