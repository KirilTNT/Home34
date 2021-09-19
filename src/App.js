import logo from './logo.svg';
import './App.css';
const {
 HashRouter,
 Switch,
 Route,
 Link


} = ReactRouterDOM

const FriendAPI = {
  friends: [
  { year: 2004, name: "Oleg" ,  hobby: игры},
  { year: 2009, name: "Andrey" ,  hobby: учитися},
  { year: 2008, name: "Karina" ,  hobby: гулять},
  { year: 2011, name: "Maks" ,  hobby: гулять},
  

    
  ],
  all: function(){ return this.players},
  get: function(id){
    const isPlayer = p => p.number === id;
    return this.players.find(isPlayer);
  }
}

const AllPlayers = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key = {p.number}>
            <Link to={`/players/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

const Player  = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if(!player){
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name}(#{player.number})</h1>
      <h2>Wins: {player.wins}</h2>
      <Link to='/players'>Back</Link>
      </div>
  )
}

const Players = () => (
  <Switch>
    <Route exact path='/players' component={AllPlayers}/>
    <Route path='/players/:number' component={Player}/>
    </Switch>
)

const Home = () => (
  <div>
    <h1>Welcome to the Sport Team Website</h1>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path = '/' component = {Home}/>
      <Route path = '/players' component = {Players}/>
    </Switch>
  </main>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/players'>friends</Link></li>
      </ul>
    </nav>
  </header>
)

const App = () => (
  <div>
    <Header/>
    <Main/>
  </div>  
)
ReactDOM.render((
  <HashRouter>
    <App/>
  </HashRouter>
), document.getElementById('root'))




function App() {
  return (
    <div id="loot" >
 
    </div>
  );
}

export default App;
