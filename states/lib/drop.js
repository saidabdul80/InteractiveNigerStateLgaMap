let data =  [
    {"Abia":
        {
            "Arochukwu":{					
                "Climate Change": "30%",
                "Climate Change2": "30%",
                "Climate Change3": "30%",        
            },
            "Ini":{

            },
            "Obi Ngwa":{

            },
            "Umuahia South	":{

            },
            "Umuahia North":{

            },
            "Ikwuano":{

            },
            "Isiukwato	":{

            },
            "Ukwa West	":{

            },
            "Aba South	":{

            },
            "Aba North":{

            },
            "Isiala Ngwa North	":{

            },
            "Isiala Ngwa South":{

            },
            "Obingwa":{

            },
            "Umunneochi":{

            },
            "Ugwunagbo":{

            },
            "Ukwa":{

            },
        }
    },
    {"Adamawa":
        {
        "Demsa":{
            "Climate Change": "30%",
            "Climate Change2": "30%",
            "Climate Change3": "30%",        
        },
        "Fufore":{
            "Climate Change": "30%",
            "Climate Change2": "30%",
            "Climate Change3": "30%",        
        },
        "Ganye":{},
        "Girei":{},
        "Gombi":{},
        "Guyuk":{},
        "Hong":{},
        "Jada":{},
        "Lamurde":{},
        "Madagali":{},
        "Maiha":{},
        "Mayo-Belwa":{},
        "Michika":{},
        "Mubi North":{},
        "Mubi South":{},
        "Numan":{},
        "Shelleng":{},
        "Song":{},
        "Toungo":{},
        "Yola North":{},
        "Yola South":{},
        }
    },
    {"Akwa Ibom":
        {

        }
    },
    {"Anambra":
        {}
    },
    {"Bauchi":
        {}
    },
    {"Bayelsa":
        {}
    },
    {"Benue":
        {}
    },
    {"Borno":
        {}
    },
    {"River":
        {}
    },
    {"Delta":
        {}
    },
    {"Ebonyi":
        {}
    },
    {"Edo":
        {}
    },
    {"Ekiti":
        {}
    },
    {"Enugu":
        {}
    },
    {"Gombe":
        {}
    },
    {"Imo":
        {}
    },
    {"Jigawa":
        {}
    },
    {"Kaduna":
        {}
    },
    {".Kano":
        {}
    },
    {".Katsina":
        {}
    },
    {".Kebbi":
        {}
    },
    {".Kogi":
        {}
    },
    {".Kwara":
        {}
    },
    {".Lagos":
        {}
    },
    {".Nasarawa":
        {}
    },
    {".Niger":
        {}
    },
    {".Ogun":
        {}
    },
    {".Ondo":
        {}
    },
    {".Osun":
        {}
    },
    {".Oyo":
        {}
    },
    {".Plateau":
        {}
    },
    {".Rivers":
        {}
    },
    {".Sokoto":
        {}
    },
    {".Taraba":
        {}
    },
    {".Yobe":
        {}
    },
    {".Zamfara":
        {}
    },
    {".Abuja":
        {}
    },
]


$(document).ready(function(){	
    let html ="" 		            
    let result = "<table><tbody>"
        /* `
        result += "</tbody></table>"; */
        Object.keys(data).forEach((item)=>{                
            Object.keys(data[item]).forEach(inItem=>{
                html +=`<li> <span>${inItem}</span><div>
                        <h5>L.G.A</h5>
                    <ul>`
                Object.keys(data[item][inItem]).forEach(inItem2=>{
                    
                    html += `<li><span>${inItem2}</span>
                                <div>
                                    <table>
                                        <tbody>`
                    Object.keys(data[item][inItem][inItem2]).forEach(inItem3=>{
                    html += 				`<tr>
                                                <td>${inItem3}</td>
                                                <td>${data[item][inItem][inItem2][inItem3]}</td>
                                            </tr>`
                    })
                    html+=`
                                        </tbody>
                                    </table>
                                </div>
                            </li>`
                })
                html +=`</ul><div> </li>`
            })										
        })	            
$(".dropDownx ul").html(html)
$(".dropBtn").click(function(event){
    event.stopPropagation();
    $(".dropDownx").slideToggle()
})
$("body:not(.dropBtn)").click(function(e){			
    $(".dropDownx").slideUp()
})
})