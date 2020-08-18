using System.Collections.Generic;
using System.Linq;
using WebApplication2.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.Text.RegularExpressions;
using Newtonsoft.Json.Linq;


namespace WebApplication2.Services.MainService
{
    public class MainService
    {
        public readonly Figure _data;
        private readonly string path = @"D:\C#\WorkSpace\WebApplication2\WebApplication2\data.json";
        public MainService()
        {

            string text = File.ReadAllText(path, System.Text.Encoding.UTF8);
            var parsed = JObject.Parse(text).ToString();

            _data = JsonConvert.DeserializeObject<Figure>(parsed);
            _data.figures.ForEach(d => d.Calculator());
            var jsonData = JsonConvert.SerializeObject(_data);
            System.IO.File.WriteAllText(@"D:\C#\WorkSpace\WebApplication2\WebApplication2\newJsondata.json", jsonData);

        }   

        

        public Figure GetAllData()
        {
            return _data;
        }
    }
    
}