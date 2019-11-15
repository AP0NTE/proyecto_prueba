using Newtonsoft.Json;
namespace EJ1.Models
{
    public class MyDBItem
    {
        [JsonProperty("id")] public int Id{ get; set; }
        [JsonProperty("name")] public string Name{ get; set; }
        [JsonProperty("text")] public string Text{ get; set; }
        
    }
}