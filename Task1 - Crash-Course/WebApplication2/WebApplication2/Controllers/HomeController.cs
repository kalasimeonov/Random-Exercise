using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication2.Services.MainService;

namespace WebApplication2.Controllers
{
    public class HomeController : Controller
    {
        private MainService service;

        public HomeController()
        {
            service = new MainService();
        }

        public ActionResult Index()
        {
            var data = service.GetAllData(); 

            ViewBag.Title = "Home Page";

            return View(data);
        }


    }

 
}
