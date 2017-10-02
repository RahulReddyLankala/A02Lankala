function conns()
{
            var x = document.getElementById("clickhere").value;
            document.getElementById("pop").innerHTML = country(x);
           
}
    function country(x)
    {

        if(x == "India")
            return "1.324 billion";
         if(x == "USA")
             return "323.1 million";
         if(x == "China")
            return "1.379 billion";
         if(x == "Japan")
             return "127 million ";
         if(x == "Canada")
            return "36.29 million ";
        
    }