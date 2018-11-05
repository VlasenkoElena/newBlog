import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PostIndexComponent } from './post-index.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PostsService } from '../../shared/services/posts.servece';
import { of } from 'rxjs';
import { TokenService } from '../../shared/services/token.service';
import { TokenServiseStub } from '../../shared/services/service-stub/token-stub.servise';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import * as fromFeature from '../../store/reducers';
import * as postsAction from '../../store/action/post.action';

describe('AllPostsComponent', () => {
  let component: PostIndexComponent;
  let fixture: ComponentFixture<PostIndexComponent>;
  let postsService;
  let store: Store<fromFeature.ItemState>;

  beforeEach(async(() => {
    postsService = jasmine.createSpyObj('PostsService', ['getPosts']);
    const postsSpy = postsService.getPosts.and.returnValue(of([]));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        StoreModule.forRoot({
          ...fromRoot.reduser,
          feature: combineReducers(fromFeature.reduser)
        })],
      declarations: [ PostIndexComponent ],
      providers: [
        {provide: PostsService, useValue: postsService},
        {provide: TokenService, useClass: TokenServiseStub}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostIndexComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
    spyOn(component, 'getPost');
  });

  it('should create', async() => {
    expect(component).toBeTruthy();
  });

  it('should call getPost metod', async() => {
    const action = new postsAction.GetPosts();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
