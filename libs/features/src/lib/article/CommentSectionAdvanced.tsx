import { CommentInput } from './commentAdvanced/CommentInput';
import { CommentList } from './commentAdvanced/CommentList';
import { CommentStats } from './commentAdvanced/CommentStats';
import { AuthContext, useCommentLogic } from './commentAdvanced/hooks';
import { UserInfo } from './commentAdvanced/UserInfo';

export function CommentSectionAdvanced() {
  console.log('CommentSectionAdvanced rendered');
  const {
    comments,
    inputRef,
    isLoading,
    errorMessage,
    authValue,
    stats,
    handleSubmit,
    handleInteraction,
  } = useCommentLogic();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider value={authValue}>
      <section>
        <h2>進階留言區</h2>

        <UserInfo />

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <CommentStats stats={stats} />

        <CommentInput ref={inputRef} onSubmit={handleSubmit} />

        <CommentList
          comments={comments}
          onInteraction={handleInteraction}
        />
      </section>
    </AuthContext.Provider>
  );
}
