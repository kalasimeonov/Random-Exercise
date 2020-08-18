using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class GeometricFigureModel
    {
        [JsonProperty("id")]
        public int id { get; set; }
        public double area { get; set; }
        public double perimeter { get; set; }
        [JsonProperty("type")]
        public string type { get; set; }
        [JsonProperty("coordinates")]
        public List<XYContainer> sides  { get; set; }

        public void Calculator()
        {
            if (this.type == "triangle") 
            {
                double sideA;
                sideA = Math.Pow(Math.Abs(sides[1].x) - Math.Abs(sides[2].x), 2) + Math.Pow(Math.Abs(sides[1].y) - Math.Abs(sides[2].y), 2);
                sideA = Math.Sqrt(sideA);
                double sideB;
                sideB = Math.Pow(Math.Abs(sides[0].x) - Math.Abs(sides[2].x), 2) + Math.Pow(Math.Abs(sides[0].y) - Math.Abs(sides[2].y), 2);
                sideB = Math.Sqrt(sideB);
                double sideC;
                sideC = Math.Pow(sideA, 2) + Math.Pow(sideB, 2);
                sideC = Math.Sqrt(sideC);

                this.perimeter = sideA + sideB + sideC;
                double semiPerimeter = this.perimeter / 2;
                this.area = Math.Sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
            }

            if (this.type == "rectangle")
            {
                double sideA = Math.Abs(sides[0].x) - Math.Abs(sides[1].x) + Math.Abs(sides[0].y) - Math.Abs(sides[1].y);
                double sideB = Math.Abs(sides[1].x) - Math.Abs(sides[2].x) + Math.Abs(sides[1].y) - Math.Abs(sides[2].y);

                this.perimeter = sideA * 2 + sideB * 2;
                this.area = sideA * sideB;
            }
        }

        

    }
}