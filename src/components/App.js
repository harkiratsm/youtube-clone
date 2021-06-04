import React ,{useState}from 'react'
import Header from './Header'
import Aside from './Aside'
import '../css/App.css'
import Recommend from './Recommend'
import Search from './Search'
import youtube from './youtube'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [videos,setvideos]=useState([])
  const [newdata,setnewdata]=useState([])
  const [backdata,setbackdata]=useState([])
  const handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
        params: {
            q: termFromSearchBar
        }
    })
    .then(async(response)=>{
      setvideos(response.data.items)
      console.log("this is resp",response);
      console.log(videos)
      response.data.items.map(async(i)=>{
        const response1= await youtube.get('/channels',{
          params:{
            part:'statistics,snippet',
            id:i.snippet.channelId,
            maxResults:1
          }
        })
        // console.log("this is new",response1.data.items)
        setnewdata(prev => [...prev,response1.data.items[0]])
        // setnewdata(()=>{
        //   newdata.push(response1.data.items[0])
        // })
        
      })
      response.data.items.map(async(i)=>{
        
        if(i.id.kind=="youtube#channel"){
          (await function (){
            setbackdata(prev=>[...prev,{harry:"io"}])
          })();
          
        }
        else{
          const response2=await youtube.get('./videos',{
            params:{
              part:'statistics,contentDetails',
              id:i.id.videoId
            }
          })
          setbackdata(prev=>[...prev,response2.data.items[0]])
        }
        
      })
      
    })   
  };
  const searchlol=()=>{
    setnewdata([])
  }
  const searchlol1=()=>{
    setbackdata([])
  }
  return (
    <Router>
      <Header handleclick={handleSubmit} searchlol={searchlol} searchlol1={searchlol1}/>
      <Switch>
        <Route exact path="/youtube-clone/">
          <div className="app-page">
            <Aside />          
            <Recommend /> 
          </div>
        </Route>
        <Route path='/search'>
            <div className="search-page">
              <Aside />
              <Search videos={videos} newdata={newdata} backdata={backdata} />
            </div>
          
        </Route>
      </Switch>
    </Router>
    // <div>
    //   <Header />
    //   <div className="app-page">
    //     <Aside />
        
    //     <Recommend /> 
    //   </div>
      
    // </div>
  )
}

export default App
