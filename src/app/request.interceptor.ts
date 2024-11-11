import { HttpHeaders, HttpInterceptorFn } from "@angular/common/http";

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq = req.clone({
    headers: new HttpHeaders({
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTAxOTk2OGI5NDE0OTMxODQ0MzYwODVmZDA1MmZjZCIsIm5iZiI6MTczMDExMjkyMi4zNjkxMTEsInN1YiI6IjY3MWY2MmIyNmQ2YjcwNWRjODcxZWI1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RPqEQnlslsJ1cJjTBgVlUJiUSSSL78ZN5dk9ZCf6YI",
    }),
  });
  return next(newReq);
};
