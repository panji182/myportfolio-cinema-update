import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import LayoutSetting from "./LayoutSetting";
let l_setting = new LayoutSetting();

const SHOW_PER_PAGE = 3;

function LayoutContent (props) {
	const [contentOutest,setContentOutest] = useState([]);
	const [data,setData] = useState([]);
	const [offset,setOffset] = useState(0);
	const [pageCount,setPageCount] = useState(0);
	
	useEffect(() => {
		if (data.length < 1) return;
		let contentInner = [], contentOuter = [];
		let val = 0, i_content = 0, wrapped = false, renderVal;
		while (val < Object.keys(data).length) {
			if (i_content <= 2) {
				renderVal = (
					<div className="col-lg-4 de-parent" key={ val }>
						<div className="well">
							<p className="imgWrap"><img src={ data[val].imgPath } alt={ data[val].imgAlt } /></p>
							<h3>{ data[val].title }</h3>
							<p className="descriptBox">
								<b>Cast</b><br />
								<span className="textCast">{ data[val].cast }</span><br />
								<b>Released</b><br />
								{ data[val].release }<br /><br />
								<b>Trailer</b><br />
								<span className="de-disableCond">{ data[val].trailerExist }</span><br /><br />
							</p>
							<a href={ data[val].trailer } className="btn btn-default de-target" target="_blank" rel="noopener noreferrer">Watch Trailer</a>
						</div>
					</div>
				);
				contentInner.push(renderVal);
				i_content += 1;
				val += 1;
				wrapped = false;
			} else {
				renderVal = (
					<li key={ val }>
						<div className="row">
							{ contentInner }
						</div>
					</li>
				);
				contentOuter.push(renderVal);
				i_content = 0;
				contentInner = [];
				wrapped = true;
			}
		}
		if (!wrapped) {
			renderVal = (
				<li key={ val }>
					<div className="row">
						{ contentInner }
					</div>
				</li>
			);
			contentOuter.push(renderVal);
		}
		renderVal = (
			<div className="container" key={ val }>
				<div id="paginating">
					{ contentOuter }
				</div>
			</div>
		);
		setContentOutest(renderVal);	
	},[data]);

	useEffect(() => {
		let dataShow = [];
		switch (parseInt(props.nav)) {
			case 0 : dataShow = [...window.dataStore.dataAction];break;
			case 1 : dataShow = [...window.dataStore.dataDrama];break;
			case 2 : dataShow = [...window.dataStore.dataHorror];break;
			default : dataShow = [...window.dataStore.dataAnimation];
		};
		setPageCount(Math.ceil(dataShow.length / SHOW_PER_PAGE));
		setData(dataShow.slice(offset,(SHOW_PER_PAGE + offset)));
	},[offset])

	function handlePageClick (data) {
		let selected = data.selected;
		let offset = Math.ceil(selected * SHOW_PER_PAGE);

		setOffset(offset);
	};

	useEffect(() => {
		l_setting.disableElement("not available");
	},[contentOutest]);

	return (
		<>
			{ contentOutest }
			<div className="container">
				<div className="innerContainer">
					<ReactPaginate
						previousLabel={'Previous'}
						nextLabel={'Next'}
						breakLabel={'...'}
						breakClassName={'break-me'}
						pageCount={pageCount}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						onPageChange={(data) => handlePageClick(data)}
						containerClassName={'pagination'}
						subContainerClassName={'pages pagination'}
						activeClassName={'active'}
					/>
				</div>
			</div>
		</>
	);
}

export default LayoutContent;
