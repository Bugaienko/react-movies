

function Movie (props) {
	const {
		Title: title,
		Year: year,
		imdbID: id,
		Type: type,
		Poster: poster
	} = props

	return (
			<div id={id} className="card movie">
				<div className="card-image">
					{
						poster === "N/A" ?
							<img className="activator" src={`https://via.placeholder.com/300x450?text=${title}`} alt=""/>
							: <img className="activator" src={poster} alt=""/>
					}


				</div>
				<div className="card-content">
					<span className="card-title">{title}</span>
					<p>{year} <span className="right">{type}</span></p>
				</div>

	</div>)
}
export {Movie};