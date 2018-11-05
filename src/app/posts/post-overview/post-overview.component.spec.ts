import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOverviewComponent } from './post-overview.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MOCK_ROUTES } from '../../test-helpers/router.mock';
import { CurrentUserDirective } from '../../shared/directives/current-user.directive';
import { PostsService } from '../../shared/services/posts.servece';
import { of } from 'rxjs';
import { TokenService } from '../../shared/services/token.service';
import { TokenServiseStub } from '../../shared/services/service-stub/token-stub.servise';
import { ActivatedRoute } from '@angular/router';
import { MOCK_POST } from '../../test-helpers/post-id.mock';
import { TestStore } from '../../store/test/test.store';
import { PostState } from '../../store/reducers/posts.reduser';
import { Store } from '@ngrx/store';

describe('PostOverviewComponent', () => {
  let component: PostOverviewComponent;
  let fixture: ComponentFixture<PostOverviewComponent>;
  let postsService;
  let store: TestStore<PostState>;

  beforeEach(async(() => {
    postsService = jasmine.createSpyObj('PostsService', ['getPostById']);
    const byIdSpy = postsService.getPostById.and.returnValue(of(MOCK_POST));
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(MOCK_ROUTES)],
      declarations: [PostOverviewComponent, CurrentUserDirective],
      providers: [
        {provide: Store, useClass: TestStore},
        {provide: PostsService, useValue: postsService },
        {provide: TokenService, useClass: TokenServiseStub},
         {provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => {
                  return 'id';
                }
              }
            },
            params: of({})
          }
         }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
