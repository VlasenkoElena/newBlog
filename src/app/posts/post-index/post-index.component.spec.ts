import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIndexComponent } from './post-index.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PostsService } from '../../shared/services/posts.servece';
import { of } from 'rxjs';
import { TokenService } from '../../shared/services/token.service';
import { TokenServiseStub } from '../../shared/services/service-stub/token-stub.servise';
import { TestStore } from '../../store/test/test.store';
import { PostState } from '../../store/reducers/posts.reduser';
import { Store } from '@ngrx/store';
import * as postsAction from '../../store/action/post.action';

describe('AllPostsComponent', () => {
  let component: PostIndexComponent;
  let fixture: ComponentFixture<PostIndexComponent>;
  let postsService;
  let store: TestStore<PostState>;

  beforeEach(async(() => {
    postsService = jasmine.createSpyObj('PostsService', ['getPosts']);
    const postsSpy = postsService.getPosts.and.returnValue(of([]));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PostIndexComponent ],
      providers: [
        {provide: PostsService, useValue: postsService},
        {provide: TokenService, useClass: TokenServiseStub},
        {provide: Store, useClass: TestStore},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'getPost');
  });

  it('should create', async() => {
    expect(component).toBeTruthy();
  });

  it('should call getPost metod', async() => {
    component.myPost = false;
    const action = new postsAction.GetMyPost();
    const spy = spyOn(store, 'dispatch');
    component.myPost = false;
    fixture.detectChanges();
    await fixture.whenStable();
    expect(spy).toHaveBeenCalledWith(action);
    // spyOn(component, 'getMyPost');
    // component.myPost = false;
    // fixture.detectChanges();
    // await fixture.whenStable();
    // expect(postsService.getPosts).toHaveBeenCalled();
  });
});
