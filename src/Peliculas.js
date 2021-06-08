/* eslint-disable react/style-prop-object */


const Pelicula = ({ videoclub }) => {
    let parrafo = []
    for (let i = 0; i < videoclub.length; i++) {
        parrafo.push(<>
            <div class="card">

                <img src={videoclub[i].cartel} alt="Avatar" style={{ width: '100%' }}  ></img>
                <div class="container">
                    <h4><b>{videoclub[i].titulo}</b></h4>
                    <p>{videoclub[i].sinopsis}</p>
                </div>
            </div>


        </>)

    } return (parrafo)


}

export default Pelicula