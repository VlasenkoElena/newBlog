// import { getTestBed, TestBed } from '@angular/core/testing';
// import { PostsService } from '../posts.servece';
// import { HttpClientTestingModule,
//   HttpTestingController
// } from '@angular/common/http/testing';
// import { Post } from '../../models/post.model';
// import { environment } from '../../../../environments/environment';

// const mockPosts = [{
//       body: 'body', image: 'img', id: 'id', title: 'title', type: 'type'}];
// const id = 'id';

// describe('PostsService', () => {
//   let injector: TestBed;
//   let postsService: PostsService;
//   let httpMock: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [PostsService]
//     });
//     injector = getTestBed();
//     postsService = injector.get(PostsService);
//     httpMock = injector.get(HttpTestingController);
//   });
//   afterEach(() => {
//     httpMock.verify();
//   });
//   it('should be created', () => {
//     expect(postsService).toBeTruthy();
//   });

//   describe('getPost', () => {
//     it('should return an Observable<Post[]>', () => {
//       postsService.getPosts().subscribe(post => {
//         expect(post.length).toBe(1);
//         expect(post).toEqual(mockPosts);
//       });

//       const req = httpMock.expectOne(
//         `${environment.apiUrl}/api/posts`
//       );
//       expect(req.request.method).toBe('GET');
//       req.flush(mockPosts);
//     });
//   });

//   describe('createNewPost', () => {
//     it('should return an Observable<Post>', () => {
//       postsService.createNewPost(mockPosts).subscribe(post => {
//         expect(post).toEqual(mockPosts);
//       });

//       const req = httpMock.expectOne(
//         `${environment.apiUrl}/api/posts`
//       );
//       expect(req.request.method).toBe('POST');
//       req.flush(mockPosts);
//     });
//   });

//   describe('editPost', () => {
//     it('should return an Observable<Post>', () => {
//       postsService.editPost(id, mockPosts).subscribe(post => {
//         expect(post).toEqual(mockPosts);
//       });

//       const req = httpMock.expectOne(
//         `${environment.apiUrl}/api/posts/id`
//       );
//       expect(req.request.method).toBe('PUT');
//       req.flush(mockPosts);
//     });
//   });
// });
