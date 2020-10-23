.menuItem {
  display: none
}

/* maybe */
img {
  vertical-align: middle;
  width: 100%;
}
 .picture{
  max-width: 95%;
  position: relative;
  margin: auto;
}
.active {
  background-color: transparent;
}



.picture {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:row;
  margin-bottom: 0%;
padding-left: auto;
padding-right: auto;
  margin: 0 10%;
  max-height: 80vh;
  height: 100%;
  /* width: 100%; */
  overflow: hidden;
  box-sizing: border-box;
}
.planetWrapper {
  max-width: 100%;
  max-height: 100%;
  /* display: grid; */
  display: flex;
  flex-direction: row;
  overflow: scroll;
  position: relative;
  width : 75vw;
  justify-content: space-between;
  align-items: center;
  z-index: 0; 
  overflow-y: hidden;
  overflow-x: hidden;
  object-fit: fill;
  object-position: 50% 50%;
}

.menuItem {
  /* padding-right: 5%;
  padding-left: 5%;
  margin-left: auto;
  margin-right: auto;
  height: 50vw;
  width: inherit; */
  object-fit: fill;
  width: 100%;
  height: 100%;  
  overflow: hidden;
  /* object-position: 50% 50%; */
}

#Mercury {
  object-fit: contain;
  width: 100%;
}
#Mercury {
  max-width: 100%;
   /* padding-right: 50%;
  padding-left: 25%; */
}
 #MercuryOff {
  /* visibility: hidden; */
  /* padding-right: 50%;
  padding-left: 50%; */
  margin-left: auto;
  margin-right: auto;

}
#Venus {
  max-width: 100%;
   /* padding-right: 50%;
  padding-left: 25%; */
}

#VenusOff {
   /* padding-right: 50%;
  padding-left: 50%; */
  margin-left: auto;
  margin-right: auto;

}




  <div class="picture" id="picture" placeholder="photo" >
  <ul class="planetWrapper" id="planetWrapper">
    <li class="menuItem" id="MercuryOff">
    <img class="img"  id="Mercury" src="" />
    </li>
    <li class=" menuItem" id="VenusOff" >
    <img class="img" src="" id="Venus" />
    </li>