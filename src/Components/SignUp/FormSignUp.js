import "./FormSignUp.scss"

const FormSignUp = () => {
    return (
        <div className="sign-up">
            <form className="sign-up-form" >
                <div className="row">
                    <div className="col">
                        <label htmlFor="email">Adresse email *</label>
                        <input type="email" name="email" placeholder="Adresse email"/>
                    </div>
                    <div className="col">
                        <label htmlFor="password">Mot de passe *</label>
                        <input type="password" name="password" placeholder="Mot de passe"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="prenom">Prénom *</label>
                        <input type="text" name="prenom" placeholder="Prénom"/>
                    </div>
                    <div className="col">
                        <label htmlFor="nomFamille">Nom de famille *</label>
                        <input type="text" name="nomFamille" placeholder="Nom de famille" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="naissance">Date de naissance *</label>
                        <input type="text" name="naissance" placeholder="1 Janvier 1999"/>
                        {/* <div className="naissance" name="naissance" >
                            <input type="text" placeholder="1"/>
                            <input type="text" placeholder="Janvier"/>
                            <input type="text" placeholder="1999"/>
                        </div> */}
                    </div>
                    <div className="col">
                        <label htmlFor="tele">Téléphone *</label>
                        <input type="text" name="tele" placeholder="+33 Téléphone"/>
                        {/* <div className="telephone" name="tele" >
                            <input type="text" placeholder="+33"/>
                            <input type="text" placeholder="Téléphone"/>
                        </div> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Vos informations personnelles ne sont utilisées qu'à des fins logistiques, seuls vos psychologues y ont accès.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="rules">
                            <input type="checkbox" name="rules"/>
                            <span>J'ai lu et j'accepte les <span>Conditions Générales d'Utilisation.</span></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input className="sinscrire" type="button" name="inscrire" value="S'INSCRIRE" />
                    </div>
                </div>
            </form>
            <div></div>
        </div>
    );
}
 
export default FormSignUp;