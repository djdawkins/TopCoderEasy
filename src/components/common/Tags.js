import React from 'react'
import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css'

export default class Tag extends React.Component {
  constructor() {
    super()
    this.state = {tags: []}
  }

  handleChange = (tags) => {
    this.setState({tags})
  }

  render() {
    return <TagsInput value={this.state.tags} onChange={this.handleChange} />
  }
}