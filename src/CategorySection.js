import React from 'react';

const styles = {
  categoryHeadings: {
    textAlign: 'left',
    left: '30%',
  },
  headingH1: {
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'left',
    marginLeft: '20%',
    marginRight: '20%',
  },
  headingP: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    marginLeft: '20%',
    marginRight: '20%',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  colMd4: {
    margin: 0,
    padding: 0,
  },
  card: {
    position: 'relative',
    overflow: 'hidden',
  },
  cardOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', /* Затемнение */
    color: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'center',
    padding: '20px',
  },
  cardTitle: {
    fontSize: '35px',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '15px',
    marginBottom: '10px',
    marginTop: '40px',
  },
  btnOrange: {
    backgroundColor: '#ca2d2a',
    color: 'white',
    padding: '10px 20px',
    fontSize: '24px',
    marginBottom: '15px',
  },
  btnLgOrange: {
    backgroundColor: '#ca2d2a',
    color: 'white',
    fontSize: '28px',
    padding: '12px 60px',
    borderRadius: '5px',
  },
};


const CategorySection = ({ title, description, recipes }) => {
    return (
      <div>
        <div style={styles.categoryHeadings}>
          <br />
          <h1 style={styles.headingH1}>{title}</h1>
          <p style={styles.headingP}>{description}</p>
        </div>
  
        <div className="container">
          <div className="row">
            {recipes.map((recipe, index) => (
              <div key={index} className="col-md-4" style={styles.colMd4}>
                <div className="card" style={styles.card}>
                  <img
                    src={recipe.image}
                    className="card-img-top"
                    alt={`Image ${index + 1}`}
                    style={{ objectFit: 'cover', filter: 'brightness(50%)' }}
                  />
                  <div className={`card-img-overlay d-flex flex-column ${styles.overlay}`}>
                    <h5 className="card-title" style={{ ...styles.cardTitle, color: 'white' }}>
                      {recipe.title}
                    </h5>
                    <p className="card-text" style={{ ...styles.cardText, color: 'white' }}>
                      {recipe.description}
                    </p>
                    <div className="mt-auto d-flex align-items-start">
                    <a href={recipe.link} className={`btn`} style={styles.btnOrange}>
                        Read more
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className="text-center mt-4">
          <a href="#" className={`btn`} style={styles.btnOrange}>
            View All Recipes
          </a>
          </div>
        </div>
        <br />
      </div>
    );
  };
  
  export default CategorySection;
  