import { Controller, Get } from "@nestjs/common";
// when user request localhost:PORT/route/return
@Controller("/route")
export class AppController {
  @Get("/login")
  getLoginRoute() {
    return "Hi Chai Pe lo";
  }
  @Get("/logout")
  getRootRoute() {
    return "Bye Bye ";
  }
}
