import React from 'react'
import R from 'ramda'
import { compose, mapProps } from 'recompose'
import { FRONTEND_URL } from '../config/apiEndPoints'

const processRank = R.identity

const enhance = compose(
  mapProps(({
    rank,
    imgUrl,
    ...otherProps,
  }) => ({
    shareLink: `${FRONTEND_URL}?imgUrl=${imgUrl}${processRank(rank)}`,
    ...otherProps,
  })),
)

const ShareIconGroup = ({
  shareLink,
}) => (
	<div>
		<i className="facebook f icon big circular"></i>
    <i className="instagram icon big circular"></i>
    <i className="wechat icon big circular"></i>
    <i className="google plus icon big circular"></i>
	</div>
)

export default enhance(ShareIconGroup)