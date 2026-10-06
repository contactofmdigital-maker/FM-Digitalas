import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"#fffaf8",color:"#3e211b",textAlign:"center"}}>
      <div>
        <p style={{color:"#ed3d78",fontWeight:800}}>BABY&apos;S MAKEN</p>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:48}}>Página no encontrada</h2>
        <p>Regresa al catálogo para seguir descubriendo nuestros vanitys.</p>
        <Link href="/" style={{display:"inline-block",marginTop:16,padding:"14px 22px",borderRadius:999,background:"#ed3d78",color:"#fff",fontWeight:800}}>Volver al catálogo</Link>
      </div>
    </main>
  );
}
