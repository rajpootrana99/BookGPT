import styles from "./NetflixCard.module.css"

export const NetflixCard = ({ movie }) => {
    // const name = "Hello to the Book GPT"
    // const rating = "8.2"
    // const summary = "Lorem ipsum in the dior of the valve of very insuficent balance of the world maker peacefully so that everyone should know that."
  
    // const returnGenre = () => {
    //   const genre = "Horror"
    //   return genre
    // }
  
    // let age = 16
  
    // // let canWatch = "Not Available"
    // // if(age >= 18) {
    // //   canWatch = "Watch Now"
    // // }
  
    // const canWatch = () => {
    //   if(age >= 18) {
    //     return "Watch Now"
    //   }
  
    //   return "Not Available"
    // }
  
    const {id, img_url, name, rating, description, genre, cast, watch_url } = movie;
    
    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${ rating >= 8.5 ? "#7dcea0" : "#f7dc6f" }`,
        color: "var(--btn-color)",
        fontWeight: "bold",
        cursor: "pointer"
    }

    const ratingClass = rating >= 8.5 ? styles['super-hit'] : styles.average;

    return (
        <li className={styles.card}>
            <div>
                <img src={img_url} alt={name} width="40%" height="40%" />
            </div>
            {/* <div className={styles['card-content']}> */}
            <div className="flex flex-col gap-[1.2rem] px-[1.6rem] py-[3.2rem]">
                <h2>Name: {name}</h2>
                
                {/* combine multiple css classes in jsx with conditional classes */}
                {/* <h3>Rating: <span className={`rating ${rating >= 8.5 ? "super-hit" : "average"}`} > {rating} </span></h3> */}

                <h3>Rating: <span className={`${styles.rating} ${ratingClass}`} > {rating} </span></h3>
                <p>Summary: {description}</p>
                <p>Genre: {genre.join(", ")}</p>
                <p>Cast: {cast.join(", ")}</p>
                {/* <button>{ age >= 18 ? "Watch Now" : "Not Available" }</button> */}
                {/* <button>{ canWatch }</button> */}
                <a href={watch_url} target="_blank">
                    <button style={ btn_style }>Watch Now</button>
                </a>
            </div>
        </li>
    )
  }