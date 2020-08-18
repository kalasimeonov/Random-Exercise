using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Mvc.Models
{
    public class mvcBooksModel
    {

        [Required(ErrorMessage = "This field is required!")]
        public string Title { get; set; }

        [Required(ErrorMessage ="This field is required!")]
        public string Author { get; set; }

        [Required(ErrorMessage = "This field is required!")]
        public string Publisher { get; set; }

        [Required(ErrorMessage = "This field is required!")]
        public short Year { get; set; }
    }
}