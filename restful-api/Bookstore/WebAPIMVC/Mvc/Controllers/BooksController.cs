using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;
using Mvc.Models;

namespace Mvc.Controllers
{
    public class BooksController : Controller
    {
        // GET: Books
        public ActionResult Index()
        {
            IEnumerable<mvcBooksModel> empList;
            HttpResponseMessage response = GlobalVariables.WebApiClient.GetAsync("Books").Result;
            empList = response.Content.ReadAsAsync<IEnumerable<mvcBooksModel>>().Result;
            return View(empList);
        }

        public ActionResult AddOrEdit(int id = 0)
        {
            if (id == 0)
            {
                return View(new mvcBooksModel());
            }
            else
            {
                HttpResponseMessage response = GlobalVariables.WebApiClient.GetAsync("Books/" +id.ToString() ).Result;
                return View(response.Content.ReadAsAsync<mvcBooksModel>().Result);
            }
            
        }

        [HttpPost]
        public ActionResult AddOrEdit(mvcBooksModel emp)
        {
            if (emp.Title != "")
            {
                HttpResponseMessage response = GlobalVariables.WebApiClient.PostAsJsonAsync("Books", emp).Result;
            }
            else
            {
                HttpResponseMessage response = GlobalVariables.WebApiClient.PutAsJsonAsync("Books", emp).Result;

            }
            return RedirectToAction("Index");
        }
        
        public ActionResult Delete(int title)
        {
            HttpResponseMessage response = GlobalVariables.WebApiClient.DeleteAsync("Books/"+ title.ToString()).Result;
            return RedirectToAction("Index");
        }
    }
}