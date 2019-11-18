"use strict"

const BrowserBlob = require("blob")
const NodeBlob = require("fetch-blob")
const envCrosser = require("env-crosser")

module.exports = envCrosser({
    browser: BrowserBlob,
    worker: BrowserBlob,
    node: NodeBlob,
})
