import test from "ava"
import isBlob from "is-blob"
import Blob from "."
globalThis.Blob = Blob

test("main", (t) => {
    t.true(isBlob(new Blob([])))
})
