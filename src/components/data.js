import {info} from '../datas/info'
import '../styles/data.css'

function Data() {
	return (
		<div className='MB-data'>
			<ul>
				{info.map(({ id, dataTop, name, title, dataBottom }) =>
					(
						<div className='MB-contente-data'  key={id}>
                            <p className='data-name'>{name}</p>
                            <div>
                                <p>{dataTop}</p>
                                <p className='data-h1'>{title}</p>
                                <p>{dataBottom}</p>
                            </div>
							
						</div>
					)
				)}
			</ul>
		</div>
	)
}

export default Data