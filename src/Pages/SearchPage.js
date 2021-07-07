import _ from 'lodash'
import faker from 'faker'
import React,{useRef,useEffect } from 'react'
import { Search, Grid, Header, Segment, Container,Button,Input } from 'semantic-ui-react'
import HeaderComponent from '../Pages/Header';
import UpperBody from '../Pages/UpperBody'
import FooterComponent from '../Pages/Footer'
import { propTypes } from 'react-bootstrap/esm/Image';

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))

const initialState = {
  loading: false,
  results: [],
  value: '',
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}

function SearchExampleStandard() {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state
  const countRef = useRef(0);
   const inputEl = useRef(null);
   const onButtonClick = () => {
    // `current` points to the mounted text input element
   inputEl.current.focus();
   
   };
   useEffect(() => {
    countRef.current=countRef.current+1;
  },[inputEl.current]);

  const timeoutRef = React.useRef()//ref initialize

  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      })
    }, 300)
  }, [])
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])
 
  return ( 
  <>
    <UpperBody />
      <HeaderComponent />
      <Container style={{height:'100%',marginBottom:'30%'}}>
      <Header as='h1' textAlign='center'>Search Page</Header>
    <Grid columns='3'>
      <Grid.Column >
        <Search 
      
          loading={loading}
          onResultSelect={(e, data) =>
            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
          }
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
        />
      </Grid.Column>
      <Grid.Column>
        <Input ref={inputEl}  placeholder='Focus Field' value={countRef.current} ></Input>
      </Grid.Column>
      <Grid.Column>
        <Button color='orange' onClick={onButtonClick}>Search</Button>
      </Grid.Column>
    </Grid>
      </Container>
 
  
  <FooterComponent/>
    </>
  )
}

export default SearchExampleStandard