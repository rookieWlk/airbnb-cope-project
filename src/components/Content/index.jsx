import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Content = memo((props) => {
  const { title, subTitle } = props
  return (
    <div className="mt-5 cursor-pointer">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subTitle
      && <div className="mt-2 text-xl">{subTitle}</div>}
    </div>
  )
})

Content.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

export default Content
