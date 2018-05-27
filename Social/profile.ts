class ProfileInformation{

  // constructor
  constructor(public work:string,public college:string,public school:string,public currentCity?:string,public hometown?:string,private address?:string,public neighbourhood?:string,private email?:string,public websites?:string,public socialLinks?:string,public birthDate?:string,public gender?:string,public religiousNews?:string,private relationShip?:string,private familyMembers?:string[],public about?:string,public favoriteQuotes?:string,public lifeEvents?:object[],public age?:number,private mobileNumber?:number,private interestedIn?:string){
  this.work=work;
  this.college=college;
  this.school=school;
  this.currentCity=currentCity;
  this.hometown=hometown;
  this.address=address;
  this.neighbourhood=neighbourhood;
  this.email=email;
  this.websites=websites;
  this.socialLinks=socialLinks;
  this.birthDate=birthDate;
  this.gender=gender;
  this.religiousNews=religiousNews;
  this.relationShip=relationShip;
  this.familyMembers=familyMembers;
  this.about=about;
  this.favoriteQuotes=favoriteQuotes;
  this.lifeEvents=lifeEvents;
  this.age=age;
  this.mobileNumber=mobileNumber;
  this.interestedIn=interestedIn;

  }//end of constructor.

  //Methods to get work value.
  getWorkValue=()=>{
      return this.work;
  }
  //Methods to get College Name.
  
  getCollege=()=>{
      return this.college;
  }
  //Methods to get School Name.
  
  getSchool=()=>{
      return this.school;
  }
  //Methods to get city Name.
  
  getCurrentCity=()=>{
      return this.currentCity;

  }
  //Methods to get HomeTown.
  
  getHomeTown=()=>{
      return this.hometown;
  }
  //Methods to get Address.
  
  getAddress=()=>{
      return this.address;
  }
  //Methods to get Neighbourhood.
  
  getNeighbourHood=()=>{
      return this.neighbourhood;
  }
  //Methods to get Email.
  
  getEmail=()=>{
      return this.email;
  }
  //Methods to get website .
  
  getWebsites=()=>{
      return this.websites;
  }
  //Methods to get Social Links.
  
  getSocialLinks=()=>{
      return this.socialLinks;
  }
  //Methods to get Date of Birth.
  
  getBirthDate=()=>{
      return this.birthDate;
  }
  //Methods to get gender.
  
  getGender=()=>{
      return this.gender;
  }
  //Methods to get Religious News.
  
  getReligiousNews=()=>{
      return this.religiousNews;
  }
  //Methods to get Relationship.
  
  getRelationShip=()=>{
      return this.relationShip;
  }
  //Methods to get Family Members.
  
  getFamilyMembers=()=>{
      return this.familyMembers;
  }
  //Methods to get About.
  
  getAbout=()=>{
      return this.about;
  }
  //Methods to get FavoriteQuotes.
  
  getFavoriteQuotes=()=>{
  return this.favoriteQuotes;
  }
  //Methods to get Life Events.
  
  getLifeEvents=()=>{
      return this.lifeEvents;
  }
  //Methods to get Age.
  
  getAge=()=>{
      return this.age;
  }
  getMobileNumber=()=>{
      return this.mobileNumber;
  }
  getInterestedIn=()=>{
      return this.interestedIn;

  }
  //Implementation will be added later on.
  getProfessionalSkills=()=>{
      console.log("Professional Details: professional skills yet to be added")
  }
  getOtherNames=()=>{
      console.log("Other names: add Other names");
  }
  getBloodDonation=()=>{
      console.log("Blood Donation: add a blood donation details");
  }
  getpublicKey=()=>{
      console.log("Public Key: add a public key");
  }
  getOtherPlaceLived=()=>{
      console.log("Other Place Lived: add a other place lived information");
  }


}//end of class
//Instance of class ProfileInformation.
let santhosh=new ProfileInformation("Engineer","PKIET","TP Govt hr.sec.school","Karaikal","Puducherry(India)","54 singara vellar salai karaikal","nil","santh11.bala@gmail.com","sefan.ru","santhosh eBuddy","11-10-1994","Male","General","single",["rey mio","Hemant"],"self motivated","Do mistakes Believe in yourself Learn form your mistakes",[{"year":"2018",
"event":"Graduated from PKIET"},
{
"year":"2012",
"event":"started college at PKIET"},
{"year":"2010",
"events":"TP Govt hr sec school,karaikal"},
{"year":"1994",
"events":"Born on oct 30,1994"}],23,948933223,"women")

//accessing the method of class.
let work=santhosh.getWorkValue();//work
let college=santhosh.getCollege();//college
let school=santhosh.getSchool();//school
let city=santhosh.getCurrentCity();//city
let home=santhosh.getHomeTown();//home
let address=santhosh.getAddress();//address
let neighbourhood=santhosh.getNeighbourHood();//neighbourhood
let email=santhosh.getEmail();//email
let websites=santhosh.getWebsites();//websites
let socialLinks=santhosh.getSocialLinks();//sociallinks
let DateOFBirth=santhosh.getBirthDate();//Dateofbirth
let gender=santhosh.getGender();//gender
let religious=santhosh.getReligiousNews();//ReligiousNews
let relationShip=santhosh.getRelationShip();//relationship
let familyMembers=santhosh.getFamilyMembers();//familyMembers
let about=santhosh.getAbout();//about
let favoriteQuotes=santhosh.getFavoriteQuotes();//favoriteQuotes
let events=santhosh.getLifeEvents();//events
let age=santhosh.getAge();//age
let mobileNumber=santhosh.getMobileNumber();//mobileNumber
let interestedIn=santhosh.getInterestedIn();//InterestedIn
//show the output.
console.log("Work: " + work);
console.log("College: " +college);
console.log("School: " +school);
console.log("City: " +city);
console.log("Home: " +home);
console.log("Address: " +address);
console.log("Neighbourhood: " +neighbourhood);
console.log("Email: " +email);
console.log("Websites: " +websites);
console.log("SocialLinks: " +socialLinks);
console.log("DateOfBirth: " +DateOFBirth);
console.log("Gender: " +gender);
console.log("Religious: " +religious);
console.log("Relationship: " +relationShip);
console.log("family Members: " +familyMembers);
console.log("About: " +about);
console.log("FavoriteQuotes: " +favoriteQuotes);
console.log("Events: ", events);
console.log("Age: "+age);
santhosh.getProfessionalSkills();
santhosh.getOtherNames();
santhosh.getBloodDonation();
santhosh.getpublicKey();
santhosh.getOtherPlaceLived();
console.log("Mobile Number: "+mobileNumber);
console.log("Interested in: "+interestedIn);