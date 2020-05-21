const test = require("ava")
const isBlob = require("is-blob")
const getStream = require("get-stream")
const Blob = require(".")
global.Blob = Blob

test("main", t => {
	t.true(isBlob(new Blob([])))
})

test("size", t => {
	const data = "a=1"
	const blob = new Blob([data])
	t.is(blob.size, data.length)
})

test("type", t => {
	const data = "a=1"
	const type = "text/plain"
	const blob = new Blob([data], { type })
	t.is(blob.type, type)
})

test("text()", async t => {
	const data = "a=1"
	const type = "text/plain"
	const blob = new Blob([data], { type })
	t.is(await blob.text(), data)
})

test("arrayBuffer()", async t => {
	const data = "a=1"
	const type = "text/plain"
	const blob = new Blob([data], { type })

	const decoder = new TextDecoder("utf-8")
	const buffer = await blob.arrayBuffer()
	t.is(decoder.decode(buffer), data)
})

test("stream()", async t => {
	const data = "a=1"
	const type = "text/plain"
	const blob = new Blob([data], { type })
	const result = await getStream(blob.stream())
	t.is(result, data)
})

test("toString()", t => {
	const data = "a=1"
	const type = "text/plain"
	const blob = new Blob([data], { type })
	t.is(blob.toString(), "[object Blob]")
})

test("slice()", async t => {
	const data = "a=1"
	const type = "text/plain"
	const blob = new Blob([data], { type })
	const blob2 = blob.slice(0, 1)
	t.is(await blob2.text(), data.slice(0, 1))
})
