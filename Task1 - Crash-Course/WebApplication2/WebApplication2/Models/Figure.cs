using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Figure
    {
        [JsonProperty("figures")]
        public List<GeometricFigureModel> figures { get; set; }


    }
}