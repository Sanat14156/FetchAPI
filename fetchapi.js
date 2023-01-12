
fetch("https://api.github.com/users").then(res=>{
    res.json().then(data=>{
        data.map(value=>{
            // console.log(value);
            let{login,avatar_url,html_url}=value;
            let section=document.querySelector("section");
            section.innerHTML +=`<div><h1>${login}</h1>
            <img src="${avatar_url}" width="200px"  >
            <a href="${html_url}" target="_blank">Go to Github Profile</a>
            </div>`
        });
    }).catch(err=>{
        console.log(err);
    }).catch(err=>{
        console.log(err);
    }).finally(()=>{
        console.log("server responded...");
    })
})