

export const goToHomePage = (navigate)=>{
    navigate("/")
};

export const goToDetailsPage = (navigate, id)=>{
    navigate(`/details/${id}`)
};

export const goToPokedex = (navigate)=>{
    navigate("/pokedex")
};

export const goErrorPage = (navigate) => {
    navigate("/*")
}