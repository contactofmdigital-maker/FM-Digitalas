'use client';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"#fffaf8",color:"#3e211b",textAlign:"center"}}>
      <div>
        <p style={{color:"#ed3d78",fontWeight:800}}>BABY&apos;S MAKEN</p>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:42}}>Algo no salió como esperábamos.</h2>
        <p>Intenta cargar nuevamente la colección.</p>
        <button onClick={() => reset()} style={{marginTop:16,padding:"14px 22px",border:0,borderRadius:999,background:"#ed3d78",color:"#fff",fontWeight:800,cursor:"pointer"}}>Reintentar</button>
      </div>
    </main>
  );
}
