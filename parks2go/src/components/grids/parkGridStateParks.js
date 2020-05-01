// JavaScript Document
import React from 'react';
import Inprogress from '../progress_indicator/inProgress'

//Material UI
import {withStyles} from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = {
root:{
	direction:'row',
	flexGrow:'1',
	margin:'1%',
	},
container:{
    display: 'flex',
	 flexWrap: 'wrap',
	justifyContent: 'space-around',
	overflow: 'hidden',
	},
gridList: {
	paddingBottom:'0.2%',
  },
paper: { 
    textAlign: 'center',
		width:'600px',
		height: '500px',
		backgroundColor: 'rgb(15,15,15,0.4)',
		listStyleType:'none',
	backgroundColor:'white',
  },
indImgs:{
	height: '100%',
	width:'100%',
	},
};


 let sCode = window.location.pathname;
 let newSC = sCode.split('/stateActivities/');
 newSC.shift();

const targetId = newSC;
const endpoint = `statecode=${targetId}&limit=2`;


//Smart Component
class ParkGridStateParks extends React.Component {
	//declaring state and new object
	state ={
		parkArray: [],
		isLoading: false,
	}

parkClick(event) {
	window.onclick= event => {
		//console.log(event.target);
		
		var parkId = event.target.id;
		window.location.assign(`http://localhost:3000/park/${parkId}`);
	};
} 

//calling fetchData function
	componentDidMount(){
	this.fetchData();
}

//fetching API
fetchData(props){
	 //const classes = useStyles();
	this.setState({ isLoading: true }, () => {
		
	fetch(`https://developer.nps.gov/api/v1/parks?${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
		.then(results =>{
		return results.json();
	}).then(data => {this.setState({
		 isLoading:false,
		data:[data.data]
		})
					 
					 console.log('data',data)
					})
		//console.log(data)
		//console.log("state", this.state.data)
	})
}		   
	 render() { 
		 //const classes = useStyles();
		 const { data, isLoading } = this.state; 
		 	console.log(isLoading)
			
		 if(isLoading){
            return <Inprogress />
          }
			
			let newArray = data;
			 console.log(newArray)
			 
			if (newArray != null) {
        		return (
            		 <GridList  style={styles.gridList}>
                		{newArray.map((use =>
					
							<GridListTile style={styles.paper}>
								{console.log(use)}
								<img key={use.images[0].id} id={use.parkCode} src={use.images[0].url} alt={use.images[0].altText} style={styles.indImgs} onClick={this.parkClick}/>
								<GridListTileBar title={use.images[0].title} subtitle={<span>{use.addresses[0].city}, {use.addresses[0].stateCode}</span>} />
					
							</GridListTile>	
							))
						}
            		</GridList>
        		);
    }
  return (
 <div style={styles.root}>
      <Grid container style={styles.container}>
	  		{this.state.ParkGridStateParks}	
     </Grid>
    </div>
  );
 }
}
export default ParkGridStateParks
//export default withStyles(useStyles)(ParkGridStateParks);

const styles ={
root:{
	direction:'row',
	flexGrow:'1',
	margin:'1%',
	},
container:{
    display: 'flex',
	 flexWrap: 'wrap',
	justifyContent: 'space-around',
	overflow: 'hidden',
	},
gridList: {
	paddingBottom:'0.2%',
  },
paper: { 
    textAlign: 'center',
		width:'600px',
		height: '500px',
		backgroundColor: 'rgb(15,15,15,0.4)',
		listStyleType:'none',
	backgroundColor:'white',
  },
indImgs:{
	height: '100%',
	width:'100%',
	},
}
