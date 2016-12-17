import React from 'react'
import ReactDOM from 'react-dom'
import R from 'ramda'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
 
import App from './App'
import './styles/index.css'

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin()


const processRawRank = 
  R.pipe(
    R.split(','),
    R.zipObj(['name', 'prob']),
    R.evolve({
      prob: Number
    })
  )

const separateQueryAndSquash = R.pipe(
  R.split('&'),
  R.map(R.split('=')),
  R.reduce((acc, cur) => {
    if (cur[0] === 'data'){
      const currentRank = processRawRank(cur[1])
      return {
        ...acc,
        rank: [...R.propOr([], 'rank')(acc), currentRank],
      } 
    }
    console.log(acc, cur)
    return {
      ...acc,
      [cur[0]]: cur[1],
    }
  }, {})
)

const isQueryEmpty = R.pipe(
  R.prop('search'),
  R.tail,
  R.equals('')  
)

const parseQuery = 
  R.tryCatch(
    R.ifElse(
      R.complement(isQueryEmpty),
      separateQueryAndSquash,
      R.always({})
    ),
    R.always({}),
  )


const queriesOnLoad = parseQuery(window.location)

const RootApp = () => (
	<MuiThemeProvider>
		<App query={queriesOnLoad} />
	</MuiThemeProvider>
)

ReactDOM.render(
  <RootApp />,
  document.getElementById('root')
)
