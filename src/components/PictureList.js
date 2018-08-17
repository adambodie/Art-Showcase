import React, {Component} from 'react';
import {
  Link, Route
} from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Picture from './Picture.js';
import $ from 'jquery';

export default class PictureList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			offset: 0,
		};
	}
	

	loadPhotos() {
		$.ajax({
			url      : this.props.url,
			data     : {limit: this.props.perPage, offset: this.state.offset},
			dataType : 'json',
			type     : 'GET',

			success: data => {
				this.setState({data: data, pageCount: Math.ceil(data.length / this.props.perPage)});
			},

			error: (xhr, status, err) => {
				console.error(this.props.url, status, err.toString());
			}
		});
	}
	
	componentDidMount() {
		this.loadPhotos()
	};
	
	handlePageClick = (data) => {
		let selected = data.selected;
		let offset = Math.ceil(selected * this.props.perPage);
		this.setState({offset: offset}, () => {
			this.loadPhotos();
		});
	};
	
	render(){
		let items = this.state.data.map((item, index) => {
			if (index >= this.state.offset && index < this.state.offset + this.props.perPage) {
				return(
					<li key={index} className='flex-item'>
					<Link to={`/pictures/${item.link}`}>
						<img src={`/${item.image}`} 
							 className='img-responsive center-block' 
							 alt={item.title} 
						/>
						<h4 className="name">{item.title}</h4>
					</Link>
				</li>
				)
			}
			return items;
		});
		let routes = this.state.data.map((item, index) => {
			return(
			<Route exact path={"/pictures/" + item.link} key={index} render={() => 
				<Picture title={item.title} image={item.image} types={item.types} color={item.color} medium={item.medium} description={item.description} />
				}/>
			)
		})
		
		return (
			<div id="gallery">    
				<ul className="list">
					{items}
				</ul>
				<ReactPaginate previousLabel={"previous"}
						   nextLabel={"next"}
						   breakLabel={<a href="">...</a>}
						   breakClassName={"break-me"}
						   pageCount={this.state.pageCount}
						   marginPagesDisplayed={2}
						   pageRangeDisplayed={1}
						   onPageChange={this.handlePageClick}
						   containerClassName={"pagination"}
						   subContainerClassName={"pages pagination"}
						   activeClassName={"active"} />
				<div>{routes}</div>
			</div>
		)
	}
}

