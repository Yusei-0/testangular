import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { throwError } from 'rxjs';

export const httpErrorFunction = (error: HttpErrorResponse) => {
  if (error.status === HttpStatusCode.Conflict) {
    return throwError(() => 'Algo esta fallando en el server');
  }
  if (error.status === HttpStatusCode.NotFound) {
    return throwError(() => 'No existe el demo');
  }
  if (error.status === HttpStatusCode.Unauthorized) {
    return throwError(() => 'No estas permitido');
  }
  if (error.status === HttpStatusCode.InternalServerError) {
    return throwError(() => 'El servidor está teniendo problemas');
  }
  return throwError(() => 'Ups algo salio mal');
};
