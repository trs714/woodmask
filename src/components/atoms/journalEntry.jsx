import React from "react"
import { Select, Input } from 'theme-ui'

export default function JournalEntry() {
    return (<>
  <Select sx={{
    webkitAppearance: 'none',
    appearance: 'none',
    whiteSpace: 'normal',
    border: 'none',
    borderRadius: '0',
    '&:focus': {
      border: 'none'
    }
  }} name="sound" id="sound">
  <optgroup label="勘定科目">
    <option> </option>
    <option>減価償却積立保証金</option>
    <option>Boop</option>
    <option>Blip</option>
  </optgroup>
  </Select>
  <Input name="username" id="username" type="number"
    sx={{
      textAlign: 'right',
      border: 'none',
      borderRadius: '0',
      bg: 'background'
    }}
  />
  <Select sx={{
    webkitAppearance: 'none',
    appearance: 'none',
    whiteSpace: 'normal',
    border: 'none',
    borderRadius: '0',
    '&:focus': {
      border: 'none'
    }
  }} name="sound" id="sound">
  <optgroup label="勘定科目">
    <option> </option>
    <option>減価償却積立保証金</option>
    <option>Boop</option>
    <option>Blip</option>
  </optgroup>
  </Select>
  <Input name="username" id="username" type="number"
    sx={{
      textAlign: 'right',
      border: 'none',
      borderRadius: '0',
      bg: 'background'
    }}
  />
    </>)
}