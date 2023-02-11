import React from "react"
import { Select, Input } from 'theme-ui'

export default function JournalEntry({options, defaults}) {
  
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
  }} name="sound" id="sound" defaultValue={defaults[0]}>
  <optgroup label="勘定科目">
    <option> </option>
    {options.map((option)=><option>{option}</option>)}
  </optgroup>
  </Select>
  <Input name="username" id="username" type="number" defaultValue={defaults[1]}
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
  }} name="sound" id="sound" defaultValue={defaults[2]}>
  <optgroup label="勘定科目">
    <option> </option>
    {options.map((option)=><option>{option}</option>)}
  </optgroup>
  </Select>
  <Input name="username" id="username" type="number" defaultValue={defaults[3]}
    sx={{
      textAlign: 'right',
      border: 'none',
      borderRadius: '0',
      bg: 'background'
    }}
  />
    </>)
}