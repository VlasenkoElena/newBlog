import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Jsona } from 'jsona/lib';
import { TJsonApiBody } from "jsona/lib/JsonaTypes";



export class JsonApiInterseptor implements HttpInterceptor {

    jsona: Jsona;

    constructor(){
        this.jsona = new Jsona();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                let newEvent = event.clone({
                    body: this.jsona.deserialize(event.body as TJsonApiBody)
                })
                return newEvent
            }
        }));
    }

}